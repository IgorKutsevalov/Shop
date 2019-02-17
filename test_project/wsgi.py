"""
WSGI config for test_project project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/howto/deployment/wsgi/
"""

#! /usr/bin/python
# -*- coding: utf-8 -*-

import os, sys

# virtual_env = os.path.expanduser('~/virtualenv/test_project')
#
# activate_this = os.path.join(virtual_env, 'bin/activate_this.py')
#
# sys.path.insert(0, os.path.join(os.path.expanduser('~'), 'projects/test_project'))

from django.core.wsgi import get_wsgi_application

os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'test_project.settings')

application = get_wsgi_application()

# def aplication(environ, start_response):
#     if environ['mod_wsgi.process_group'] != '':
#         import signal
#         os.kill(os.getpid(), signal.SIGINT)
#     return ["killed"]
