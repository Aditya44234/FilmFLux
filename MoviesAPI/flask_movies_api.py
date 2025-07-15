from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Define movies array globally so all routes can access it
movies = [
    {"id": 1, "title": "Venom: Let There Be Carnage", "release_date": "2021", "url": "https://image.tmdb.org/t/p/w500/rjkmN1dniUHVYAtwuV3Tji7FsDO.jpg"},
    {"id": 2, "title": "Fight Club", "release_date": "1999", "url": "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg"},
    {"id": 3, "title": "The Avengers", "release_date": "2012", "url": "https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg"},
    {"id": 4, "title": "Avengers: Endgame", "release_date": "2019", "url": "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg"},
    {"id": 5, "title": "The Matrix", "release_date": "1999", "url": "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"},
    {"id": 6, "title": "Inception", "release_date": "2010", "url": "https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg"},
    {"id": 7, "title": "Joker", "release_date": "2019", "url": "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg"},
    {"id": 8, "title": "Interstellar", "release_date": "2014", "url": "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg"},
    {"id": 9, "title": "The Dark Knight", "release_date": "2008", "url": "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg"},
    {"id": 10, "title": "Oppenheimer", "release_date": "2023", "url": "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg"},
    {"id": 11, "title": "Mission: Impossible – Dead Reckoning Part One", "release_date": "2023", "url": "https://image.tmdb.org/t/p/w500/NNxYkU70HPurnNCSiCjYAmacwm.jpg"},
    {"id": 12, "title": "Guardians of the Galaxy Vol. 3", "release_date": "2023", "url": "https://image.tmdb.org/t/p/w500/r2J02Z2OpNTctfOSN1Ydgii51I3.jpg"},
    {"id": 13, "title": "Forrest Gump", "release_date": "1994", "url": "https://image.tmdb.org/t/p/w500/saHP97rTPS5eLmrLQEcANmKrsFl.jpg"},
    {"id": 14, "title": "Ant-Man and the Wasp: Quantumania", "release_date": "2023", "url": "https://image.tmdb.org/t/p/w500/qnqGbB22YJ7dSs4o6M7exTpNxPz.jpg"},
    {"id": 15, "title": "Shazam! Fury of the Gods", "release_date": "2023", "url": "https://image.tmdb.org/t/p/w500/A3ZbZsmsvNGdprRi2lKgGEeVLEH.jpg"},
    {"id": 16, "title": "The Social Network", "release_date": "2010", "url": "https://image.tmdb.org/t/p/w500/n0ybibhJtQ5icDqTp8eRytcIHJx.jpg"},
    {"id": 16, "title": "The Super Mario Bros. Movie", "release_date": "2023", "url": "https://image.tmdb.org/t/p/w500/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg"},
    {"id": 17, "title": "John Wick", "release_date": "2014", "url": "https://image.tmdb.org/t/p/w500/wXqWR7dHncNRbxoEGybEy7QTe9h.jpg"},
    {"id": 18, "title": "The Shawshank Redemption", "release_date": "1994", "url": "https://image.tmdb.org/t/p/w500/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg"},
    {"id": 19, "title": "Spider-Man: No Way Home", "release_date": "2021", "url": "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg"},
    {"id": 20, "title": "Fast X", "release_date": "2023", "url": "https://image.tmdb.org/t/p/w500/fiVW06jE7z9YnO4trhaMEdclSiC.jpg"},
    {"id": 21, "title": "Top Gun: Maverick", "release_date": "2022", "url": "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg"},
    {"id": 22, "title": "The Batman", "release_date": "2022", "url": "https://image.tmdb.org/t/p/w500/74xTEgt7R36Fpooo50r9T25onhq.jpg"},
    {"id": 23, "title": "Dune", "release_date": "2021", "url": "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg"},
    {"id": 24, "title": "The Little Mermaid", "release_date": "2023", "url": "https://image.tmdb.org/t/p/w500/9n5e1vToDVnqz3hW10Jdlvmzpo0.jpg"},
    {"id": 25, "title": "Shang-Chi and the Legend of the Ten Rings", "release_date": "2021", "url": "https://image.tmdb.org/t/p/w500/1BIoJGKbXjdFDAqUEiA2VHqkK1Z.jpg"},
    {"id": 26, "title": "Eternals", "release_date": "2021", "url": "https://image.tmdb.org/t/p/w500/bcCBq9N1EMo3daNIjWJ8kYvrQm6.jpg"},
    {"id": 27, "title": "Doctor Strange in the Multiverse of Madness", "release_date": "2022", "url": "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg"},
    {"id": 28, "title": "Thor: Love and Thunder", "release_date": "2022", "url": "https://image.tmdb.org/t/p/w500/pIkRyD18kl4FhoCNQuWxWu5cBLM.jpg"},
    {"id": 29, "title": "Black Adam", "release_date": "2022", "url": "https://image.tmdb.org/t/p/w500/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg"},
    {"id": 30, "title": "Avatar: The Way of Water", "release_date": "2022", "url": "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg"},
    {"id": 31,"title": "The Wolf of Wall Street","release_date": "2013","url": "https://image.tmdb.org/t/p/w500/pWHf4khOloNVfCxscsXFj3jj6gP.jpg"}
]


@app.route("/")
def home():
    return jsonify("Welcome to My Movies Database")

@app.route('/api/movies')
def get_movies():
    return jsonify(movies)

@app.route('/api/movies/search')
def search_movies():
    query = request.args.get('q', '').lower()
    if not query:
        return jsonify([])  # Return empty list if no query provided

    # Search for movies where the title contains the query (case-insensitive)
    results = [movie for movie in movies if query in movie['title'].lower()]
    return jsonify(results)

if __name__ == '__main__':
    app.run(debug=True) 
