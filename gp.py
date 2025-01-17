import subprocess
import sys

def run_command(command):
    result = subprocess.run(command, capture_output=True, text=True, shell=True)
    if result.returncode != 0:
        print(f"Error: {result.stderr}")
        sys.exit(result.returncode)
    print(result.stdout)

def main():

    default = 'from_subfield'
    # Prompt the user for the branch name
    branch_name = input(f"Enter the branch name [Default:{default}]: ").strip()
    if not branch_name:
        branch_name = default
        # print("Branch name is required.")
        # sys.exit(1)

    # Prompt the user for the commit message
    commit_message = input("Enter the commit message: ").strip()
    if not commit_message:
        print("Commit message is required.")
        sys.exit(1)

    # Add all changes to the staging area
    run_command("git add .")

    # Commit changes with the provided message
    run_command(f'git commit -m "{commit_message}"')

    # Push changes to the remote repository
    run_command(f"git push origin {branch_name}")

    print(f"Code pushed to GitHub successfully on branch {branch_name}.")

if __name__ == "__main__":
    main()
