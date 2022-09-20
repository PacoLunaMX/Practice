import sqlalchemy as _sql
import sqlalchemy.ext.declarative as _declarative
import sqlalchemy.orm as _orm

DATABASE_URL = "sqlite:///./database.db"

# creating the connection to the database
engine =_sql.create_engine(DATABASE_URL, connect_args={"check_same_thread":False})

# making a session object to manage the engine
SessionLocal = _orm.sessionmaker(autocommit=False, autoflush=False, bind=engine)

# making a Base object to create the tables
Base = _declarative.declarative_base()

#making a function  to easily retrive the db (session)
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()