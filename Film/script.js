function searchMovie() {
    $('#movie-list').html('');
    $.ajax({
        url: 'http://www.omdbapi.com',
        type: 'get',
        dataType: 'json',
        data: {
            'apikey': '20c6542d',
            's': $('#search-input').val()
        },
        success: function (result) {
            if (result.Response == "True") {
                let movies = result.Search;

                $.each(movies, function (i, data) {
                    $('#movie-list').append(`
                    <div class="col-md-6">
                        <div class="card mb-3" style="max-width: 540px;">
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src="` + data.Poster + `" class="card-img">
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">` + data.Title + `</h5>
                                        <p class="card-text"></p>
                                        <p class="card-text"><small class="text-muted">Tahun :` + data.Year + `</small></p>
                                        <a href="#" class="btn btn-primary see-detail" data-toggle="modal" data-target="#exampleModal" data-id="` + data.imdbID + `">Lihat Detail</a>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    `);
                });
            } else {
                $('#movie-list').html(`
                <div class="col">
                    <h2 class="text-center">` + result.Error + `</h2>
                </div>`);
            }
        }
    });
}

$('#search-button').on('click', function () {
    searchMovie();
});

$('#search-input').on('keyup', function (e) {
    if (e.keyCode === 13) {
        searchMovie();
    }
})

$('#movie-list').on('click', '.see-detail', function () {
    console.log($(this).data('id'));

    $.ajax({
        url: 'http://omdbapi.com',
        dataType: 'json',
        type: 'get',
        data: {
            'apikey': '20c6542d',
            'i': $(this).data('id')
        },
        success: function (movie) {
            if (movie.Response === "True") {
                $('.modal-body').html(`
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-md-6">
                                <img src="` + movie.Poster + `" class="img-fluid" alt="Responsive image">
                            </div>
                            <div class="col-md-6">
                            <ul class="list-group">
                                <li class="list-group-item active">` + movie.Title + `</li>
                                <li class="list-group-item">Release : ` + movie.Released + `</li>
                                <li class="list-group-item">Genre : ` + movie.Genre + `</li>
                                <li class="list-group-item">Director :` + movie.Director + `</li>
                                <li class="list-group-item">Penulis :` + movie.Writer + `</li>
                            </ul>
                            </div>
                        </div>
                    </div>
                `);
            }
        }
    })

})