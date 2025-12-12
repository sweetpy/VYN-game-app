from django.core.management import call_command

def run():
    print("Setting up development data...")
    print("Populating database...")
    call_command('runscript', 'populate_db')
    print("Populating tasks...")
    call_command('runscript', 'populate_tasks')
    print("Populating recommendations...")
    call_command('runscript', 'populate_recommendations')
    print("Creating achievements...")
    call_command('runscript', 'create_achievements')
    print("Development data setup complete.")
