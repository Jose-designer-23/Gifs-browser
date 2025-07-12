# 🔍 Gifs Browser App 🚀

Welcome to the **Gifs Browser App**! A dynamic and engaging tool developed with Angular that allows you to explore the most popular trending GIFs and easily search for your favorite GIFs.

This application demonstrates key frontend development skills, including consuming external APIs and efficient state management.

## ✨ Key Features

* **Trending GIFs:** View a gallery of the most popular and trending GIFs, constantly updated.
* **Integrated Search:** A powerful search engine that allows you to find any GIF by keyword, with instant suggestions and results.
* **Infinite Scrolling (Lazy Loading):** Search results and trending GIFs are efficiently loaded as the user scrolls, optimizing performance and user experience.
* **State Management:** Clear and efficient implementation for handling search results and history.
* **HTTP Request Handling:** Consumption of external APIs to retrieve GIF data.

## 🛠️ Technologies Used

### Frontend:

* [**Angular**](https://angular.io/) - Framework for building the user interface.
* [**RxJS**](https://rxjs.dev/) - For managing asynchronous data streams (especially useful in the search bar for debouncing).
* **Gifs API:** Connects to an external API (such as Giphy API or similar) to fetch GIF data.

---

## 🚀 How to Run the Project

To get the Gifs Browser App up and running on your local environment, follow these steps:

### Prerequisites

* Node.js (version 18 or higher)
* npm or Yarn
* **API Key:** You will need an API key from the GIF platform you are using (e.g., Giphy). Register on their website to obtain your key.

### Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Jose-designer-23/Gifs-browser](https://github.com/Jose-designer-23/Gifs-browser)
    cd Gifs-browser
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or if you use Yarn
    # yarn install
    ```

3.  **Configure the API key:**
    * Inside the `src/environments/` folder (or wherever you manage your environment variables), open the `environment.ts` file (and/or `environment.prod.ts` if you have one).
    * Add your API key obtained from the prerequisites. For example:
        ```typescript
        export const environment = {
          production: false,
          apiKey: 'YOUR_API_KEY_HERE' // <--- Insert your key here
        };
        ```
        (The variable name `apiKey` may vary depending on how you implemented it in your code).

4.  **Start the application:**
    ```bash
    ng serve
    ```

5.  **Access the Application:**
    Open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

---

## 💻 Development Commands (Angular CLI)

This section provides a quick reference to the most common Angular CLI commands.

* **Start the Development Server:**
    ```bash
    ng serve
    ```
* **Generate Components, Services, etc.:**
    ```bash
    ng generate component component-name
    ng generate service services/my-service
    # For a complete list of available schematics: ng generate --help
    ```
* **Build the Project for Production:**
    ```bash
    ng build
    ```
* **Run Unit Tests:**
    ```bash
    ng test
    ```
