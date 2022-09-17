from fastapi import FastAPI

app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Working!"}


@app.get("/users")
async def get_users():
    return {"users": {"user_1":"John", "user_2":"Jane"}}



@app.post("/user")
async def create_user(User):
    # create user in a database
    return {"message":"Created user with name {} created".format(User)}


@app.delete("/user/{id}")
async def delete_user(id:int):
    # delete user in a database
    return {"message":"User deleted with id {}".format(id)}


@app.put("/user/{id}")
async def update_user(id: int):
    # update user in a database
    return {"message":"User updated with id {}".format(id)}

