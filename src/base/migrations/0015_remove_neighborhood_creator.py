# -*- coding: utf-8 -*-
# Generated by Django 1.10 on 2016-11-11 01:15
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('base', '0014_auto_20161111_0017'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='neighborhood',
            name='creator',
        ),
    ]
