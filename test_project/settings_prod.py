DEBUG = False
ALLOWED_HOST = ['*']

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql_psycopg2',
        'NAME': 'db1',
        'USER': 'django_shop',
        'PASSWORD': 'igaryan84',
        'HOST': 'localhost',
        'PORT': '',
    }
}