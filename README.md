### HealthNest

### For MAC


To install and run the HealthNest Node.js project from scratch on a Mac, here’s a step-by-step guide:

### 1. **Install Git:**

If Git is not installed, you can install it using Homebrew or by downloading it directly.

- Install Git via Homebrew:

   ```bash
   brew install git
   ```

- Or, download it from [git-scm.com](https://git-scm.com/).

To verify Git is installed, run:

```bash
git --version
```

### 2. **Open a Terminal:**

You can open the terminal on your Mac using `Cmd + Space`, type `Terminal`, and hit enter.

### 3. **Navigate to the Directory Where You Want to Clone the Repository:**

Use the `cd` command to go to the directory where you want to clone the project:

```bash
cd /path/to/your/directory
```

For example, to move to the Documents folder:

```bash
cd ~/Documents
```

### 4. **Clone the Repository:**

Run the following Git command to clone the repository. Replace `<repository_url>` with the actual URL of the GitHub repository:

```bash
git clone <repository_url>
```

### 5. **Navigate into the Cloned Directory:**

After cloning, move into the cloned directory:

```bash
cd /path/to/your/cloned/project
```

For example, if the project folder is named `HealthNest`:

```bash
cd HealthNest
```
## 6. Install Node.js:
Make sure you have Node.js installed. You can install it using Homebrew:

bash
Copy code
brew install node
To verify that Node.js and npm (Node Package Manager) are installed, run:

```bash
Copy code
node -v
npm -v

```
## 7. Install Project Dependencies:
Inside the cloned project directory, install the necessary dependencies by running:

```
bash
Copy code
npm install
```

## 8. Start the Development Server:
After the dependencies are installed, you can start the development server with the following command:

```bash
Copy code
npm run dev
```
## 9. Open Your Browser:
Once the server is running, it will typically provide you with a local URL (usually http://localhost:3000 or http://localhost:5173). Open your web browser and go to that URL to view your React Vite application.
