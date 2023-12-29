
from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, DeclarativeBase


databaseurl = f"mssql+pymssql://imsi_asi:password%2E123@10.1.32.65/dms_microservices_report_dev" #MSSQL SERVER"
engine = create_engine(databaseurl)
open_session = sessionmaker(bind=engine)

class Base(DeclarativeBase):
    pass

def get_db():
    try:
        db = open_session()
        yield db
    finally:
        db.close()