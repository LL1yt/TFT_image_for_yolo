from flask import Flask, render_template, jsonify
import json

app = Flask(__name__)


@app.route("/")
def index():
    title = "Modern Flask Site"
    return render_template("index.html", title=title)


@app.route("/_get_data", methods=["POST"])
def get_data():
    myList = [
        "element1",
        "element2",
        "element3",
    ]
    return jsonify({"data": render_template("about.html", myList=myList)})


@app.route("/get_config", methods=["POST"])
def get_config():
    with open("config.json", "r") as f:
        config_data = json.load(f)
    return jsonify(
        {"config": render_template("config_template.html", config=config_data)}
    )


if __name__ == "__main__":
    app.run(debug=True)
