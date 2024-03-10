from flask import Flask, render_template, jsonify

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


if __name__ == "__main__":
    app.run(debug=True)
