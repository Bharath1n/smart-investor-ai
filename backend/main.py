from fastapi import FastAPI
from api.init import api_router

app = FastAPI(
    title="StockWise AI Backend",
    description="API for StockWise-AI: Informed Investor Decision System",
    version="0.1.0",
)
@app.get("/")
async def root():
    return {"message": "Welcome to StockWise AI Backend"}

app.include_router(api_router)
