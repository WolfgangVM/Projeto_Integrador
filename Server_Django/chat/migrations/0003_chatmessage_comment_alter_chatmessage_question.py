# Generated by Django 5.1.3 on 2024-11-12 00:56

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('chat', '0002_alter_chatmessage_question'),
    ]

    operations = [
        migrations.AddField(
            model_name='chatmessage',
            name='comment',
            field=models.TextField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='chatmessage',
            name='question',
            field=models.CharField(max_length=255),
        ),
    ]
