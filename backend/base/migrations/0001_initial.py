# Generated by Django 4.2.10 on 2024-02-25 16:52

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Student',
            fields=[
                ('id', models.BigAutoField(primary_key=True, serialize=False)),
                ('sName', models.CharField(max_length=20)),
                ('age', models.FloatField()),
            ],
        ),
    ]