from flask import json
from uoft_web_app import app


@app.route('/get_course_list', methods=['GET', 'POST'], endpoint='get_course_list')
def get_course_list():
    with open('uoft_web_app/model/TORCoursesList') as f:
        return json.load(f)
