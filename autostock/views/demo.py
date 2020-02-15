from autostock import app


@app.route('/check')
def test_config():
    return app.config["ROBIN_HOOD_PASS"]
