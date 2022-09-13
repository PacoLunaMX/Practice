import datetime as _dt
import string
import pydantic as _pydantic

class _UserBase(_pydantic.BaseModel):
    email:str

class UserCreate(_UserBase):
    hash_password: str

    class Config:
        orm_mode = True

class User(_UserBase):
    id: int

    class Config:
        orm_mode=True

class _LeadsBase(_pydantic.BaseModel):
    first_name:str
    last_name:str
    email:str
    company:str
    note:str

class LeadCreate(_LeadsBase):
    pass

class Lead(_LeadsBase):
    id: int
    owner_id:int
    date_created: _dt.datetime
    date_last_updated: _dt.datetime

    class Config:
        orm_mode=True