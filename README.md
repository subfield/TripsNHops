# Creating a New Branch in Git

To create a new branch in your repository, follow these steps:

1. **Mark the Repository as Safe**

   If you encounter an error related to repository ownership, you can mark the directory as safe using the following command:

   ```bash
   git config --global --add safe.directory "path/to/repo"
   ```

   Replace `path/to/repo` with the actual path to your repository.

2. **Create and Switch to a New Branch**

   Once the repository is marked as safe, you can create a new branch and switch to it using:

   ```bash
   git checkout -b <name-of-branch>
   ```

   Replace `<name-of-branch>` with the desired name for your new branch.

### Example

```bash
git config --global --add safe.directory "C:/Users/user/my-project"
git checkout -b feature/new-feature
```

In this example, the repository located at `C:/Users/user/my-project` is marked as safe, and a new branch named `feature/new-feature` is created and checked out.

---
Happy branching!
---

## Starting the Project in the /frontend Folder

To start the project in the `/frontend` folder, follow these steps:

1. Install all dependencies:
   ```bash
   npm i
   ```

2. Install development dependencies:
   ```bash
   npm i -D
   ```

3. Start the project:
   ```bash
   npm start
   ```

Happy coding!

