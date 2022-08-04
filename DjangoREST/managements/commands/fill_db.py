# import json
# from chardet import detect
from django.core.management.base import BaseCommand
from authors.models import Author
from authapp.models import User

# def load_from_json(file_name):
#     with open(file_name, mode='r', encoding='utf-8') as infile:
#         return json.load(infile)


class Command(BaseCommand):
    def handle(self, *args, **options):
        User.objects.create_superuser(username='admin', email='admin@mail.ru', password='admin', age=18) # hash?
        Author.objects.create(first_name='Joanne', last_name='Rowling', birthday_year=1965, email='jkrowling@jkrowling.com')
        Author.objects.create(first_name='Aleksandr', last_name='Pushkin', birthday_year=1799, email='alex@pushkin.com')
