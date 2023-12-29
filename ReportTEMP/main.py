from fastapi import FastAPI, Depends
from processingtime import ProcessTime
import model
from database import engine, get_db
from sqlalchemy.orm import Session

model.Base.metadata.create_all(bind=engine)

app = FastAPI()
app.add_middleware(ProcessTime)


@app.get("/get_data_report")
async def get_data_report(db:Session=Depends(get_db)):
    results = db.query(model.AragingDetail).all()
    return results
