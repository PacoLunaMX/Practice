import database as _database
import sqlalchemy.orm as _orm
import sqlalchemy as _sql
import models as _models, schemas as _schemas
import passlib.hash as _hash
import jwt as _jwt
import fastapi as _fastapi
import fastapi.security as _security

oauth2schema= _security.OAuth2PasswordBearer(tokenUrl="/api/token")


JWT_SECRET = "MYJWTSECRET"


def create_database():
    return _database.Base.metadata.create_all(bind=_database.engine)

async def get_user_by_email(email:str, db:_orm.Session):
    return db.query(_models.User).filter(_models.User.email == email).first()

async def create_user(user: _schemas.UserCreate, db: _orm.Session):
    user_object = _models.User(email=user.email, hashed_password=_hash.bcrypt.hash(user.hash_password))

    db.add(user_object)
    db.commit()
    db.refresh(user_object)
    return user_object

async def authenticate_user(email:str, password:str, db:_orm.Session):
    user = await get_user_by_email(email,db)
    if not user:
        return False
    if not user.verify_password(password):
        return False
    return user

async def create_token(user: _models.User):
    user_obj = _schemas.User.from_orm(user)
    token = _jwt.encode(user_obj.dict(), JWT_SECRET)
    return dict(access_token=token, token_type="bearer")

async def get_current_user(token:str = _fastapi.Depends(oauth2schema), db:_orm.Session =_fastapi.Depends(_database.get_db)):
    try:
        payload = _jwt.decode(token, JWT_SECRET, alrgorithms=["HS256"])
        user = db.query(_models.User).get(payload["id"])
    except:
        raise _fastapi.HTTPException(status_code=401, details="Invalid email or Password")
    return _schemas.User.from_orm(user)



