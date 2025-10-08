# MelodyVault Project
# 🎶 MelodyVault

## Description

MelodyVault is a full-stack music playlist manager where users can create playlists, add songs, and manage their music library with ease. Built with a Flask REST API backend and a React frontend, the app blends functionality with a smooth user experience.

---

## ✨ Features
- 👤 User Accounts – register and manage your profile
- 📂 Playlists – create and customize playlists to suit your vibe
- 🎵 Songs – add, view, and explore music with details (title, artist, genre, duration)
- 🖥️ Full CRUD Support – create, read, update, and delete across resources
- 🖥️ Full CRUD Support – create, read, update, and delete across resources
- ⚡ Interactive UI – responsive React interface for seamless navigation

## User Stories

A user I can:
- View all my playlist and their songs 
- Create a new playlist with a name and description 
- Add songs to a playlist 
- Remove songs from a playlist 
- Delete a playlist I no longer want  
- Edit or update the name or description of a playlist  
- View details of a single playlist  
- View a list of all available songs in the system  
- Search for song by the title or artist  
- Filter songs in a playlist (by artist, genre )   
- “Like” or rate song and playlist  
- Sort songs in a playlist (by name, duration, added date) 


## 🛠️ Technologies used


### Frontend
- **React**: ^19.1.1  
- **React DOM**: ^19.1.1
- **React Router DOM**: ^7.9.2
- **Formik**: ^2.4.6 
- **Yup**: ^1.7.1  
- **Axios**: ^1.12.2
- **Boxicons**: ^2.1.4

### Backend
- **Flask**
- **Flask-CORS** 
- **Flask-RESTful**
- **Flask-SQLAlchemy**
- **Flask-Migrate** 
- **SQLAlchemy-Serializer**
- **Faker** 
- **Gunicorn**   

### Database
- **PostgreSQL** — Production database  
- **SQLite** — Local development database  


## Getting Started

### Prerequisites

- Python: Version 3.8 or higher
- Node.js: Version higher than 18



#### Frontend setup 

1. Clone the Repository
 
``` 
git clone https://github.com/Jimmy-wq-code/MelodyVault_frontend
cd MelodyVault_frontend
```



2. Install dependencies
```
npm install
```
3. Start the Server
```
npm run dev
```
or
```
npm start
```
 #### Backend Setup
 From the README, at the about section, click the backend link to the backend repository, then clone it:

 ```
 https://github.com/Jimmy-wq-code/MelodyVault_backend
 ```
 2. Install dependencies:
 ```
 pipenv install
 ```

 3. Activate the virtual environment (if using Pipenv):
```
pipenv shell
```

4. Run the Flask application:
```
python app.py
```

or

```
flask run
```

### URL Links:

- live site → https://melody-vault-frontend.vercel.app/

- Frontend Repository → https://github.com/Jimmy-wq-code/MelodyVault_frontend

- Frontend → http://localhost:5174/

- Backend Repository → https://github.com/Jimmy-wq-code/MelodyVault_backend

- Backend API → http://localhost:5555

## 📸 Screenshots

Home Page 
---
<img src="./public/assets/HomePage.png" alt="Home Page" width="600">

Playlist Page 
---
<img src="./public/assets/Playlist.png" alt="Playlist Page" width="600">

Songs Page
---
<img src="./public/assets/SongsPage.png" alt="Songs Page" width="600">

Profile Page
---
<img src="./public/assets/Profile.png" alt="Profile Page" width="600">


### 🤝 Contributing
Contributions are welcome! 🎉
1. Fork the repo
2. Create a feature branch
3. Commit changes
4. Open a Pull Request

### 💡 Inspiration

Music is universal. MelodyVault is built for music lovers who want control over their playlists — simple, fast, and powerful.

### Credits
 This project was done by two brilliant individuals:
   1. Jimmy Okiwri
   2. Nicholas Kiama

We would like to thank Moringa for such a good opportuninity to do this project aand help us test the skills we gathered so far .