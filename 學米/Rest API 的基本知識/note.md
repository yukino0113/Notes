# What is flask

- Micro web framework (Python)
    - Does nor require particular tools or lib
    - No database abstraction layer, form validation

```python
from flask import Flask

# app name
app = Flask(__name__)

# Do define application root page
@app.route('/')
def hello_world():  # put application's code here
    return 'Hello World!'

if __name__ == '__main__':
    app.run()
```

## Start flask in different environments

### var - env

To change environment

- Default: production
- Other values: testing, developing

### var - debug

- Can catch exception and show on page, not only in console
- Default open when env=development

### var - testing

Exception will not be silence

- Default: false

### var - SECRET_KEY

- to encode session key
- default = none

```python
# Setting config in same file
app.comfig['ENV'] = 'development'
app.config['DEBUG] = True

# Setting config with config file
# var_name: config_name.class_name
app.config.from_object("config.DevelopmentConfig")
```

```python
class Config(Object):
	TESTING = False
	DEBUG = False
	
class DevelopmentConfig(Config):
	ENV = 'development'
	DEBUG = True
	
class TestingConfig(Config):
	ENV = 'testing'
	DEBUG = False
```

## Flask templates (Jinja)

```html
<h1>Hello World!<!h1>
<p>My name is {{username}}</p>
```

```python
app = Flask(__file__, template_folder='./templates')
@app.route('/')
def index():
	return render_template('template.html', username='yuki')
```

```python
<h1>Hello World!<!h1>
{% for user in users%}
	<li>Name: {{user.username }}, Age: {{ user.age }}</li>
{% endfor %}
```

```python
@app.route('/users')
def users():
	userItems = [
		{'username': 'jacky', "age": 30},
		{'username': 'Andy', 'age': 15}]
		return render_template('template.html', users=userItems)
```

### Template inheritance

```python
<body>
 {% block content %}{% endblock %}
</body>
<footet> = This is an awesome footer </footer>
```

```python
{% entends "footer.html" %}
{% block content %}
<h1>Hello World!<!h1>
<p>My name is {{username}}</p>
{% endblock %}
```

## Basic form

```python
<form action="/hello" method="post">
	<input type="text", name="username">
	<input type="submit">
</form>
```

```python
@app.route('/')
def login():
	return render_template("form.html")
	
@app.route('/index', methdos=['POST'])
def login():
	return render_template("index.html", username=request.form['username'])
```

## Basic form with Flask template

```python
<form action="{{ url_for('index') }}" method="post">
	<input type="text", name="username">
	<input type="submit">
</form>
```

## What is MVC

- Controller (endpoint)
- Model (function)
- View (render)

## Implement MVC with flask