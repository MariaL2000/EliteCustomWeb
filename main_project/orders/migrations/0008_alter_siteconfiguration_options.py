# Generated by Django 5.1.5 on 2025-05-01 15:52

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('orders', '0007_alter_siteconfiguration_options_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='siteconfiguration',
            options={'ordering': ['-updated_at'], 'verbose_name': 'Update images', 'verbose_name_plural': 'Update images'},
        ),
    ]
