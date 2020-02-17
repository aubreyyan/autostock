import os
from autostock import app as application

if __name__ == '__main__':
    application.run(host='0.0.0.0', port=os.environ.get("PORT", "5000"))
