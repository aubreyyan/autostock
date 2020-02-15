import os


class Config:
    placeholder = 1


class DEV(Config):
    ROBIN_HOOD_USER = None
    ROBIN_HOOD_PASS = None


class PRD(Config):
    ROBIN_HOOD_USER = os.environ.get("RH_USER")
    ROBIN_HOOD_PASS = os.environ.get("RH_PASS")
