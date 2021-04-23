<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" content="{{ csrf_token() }}">
        
        <title>FOOD Around YOU</title>

        <link href="{{asset('css/app.css')}}" rel="stylesheet" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">

    </head>
    <body>

        <div id="app"></div>
        <script src="{{asset('js/app.js')}}"></script>

        <!-- <script src="https://code.jquery.com/jquery-3.6.0.js" integrity="sha256-H+K7U5CnXl1h5ywQfKtSj8PCmoN9aaq30gDh27Xc0jk=" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script> -->
        
        <!-- <script>
            $(document).ready(function() {

                $('#addform').on('submit', function(e) {
                    
                    e.preventDefault();

                    $.ajax({
                        type: "POST"
                        url: "/addpost"
                        data: $('#addform').serialize(),
                        success: function(response) {
                            console.log(response)
                            $('#addpostmodal').modal('hide')
                            alert("Data Saved");
                        },
                        error: function(error) {
                            console.log(error)
                            alert("Data Not Saved");
                        }

                    });
                });            
            });
        </script> -->

    </body>
</html>
