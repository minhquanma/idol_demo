$(document).ready(function(){
    // Hide the loading gif on startup
    $("#loading").hide();
    $("#buttonLoad").click(function() {
        // Show the loading gif
        $("#loading").show();

        $.getJSON("http://localhost:3000/idol", data => {
            // forEach loop
           $.each(data, (key, val) => {

                var listTemplate = 
                `<li id="a" class="idol-card d-inline-block d-flex align-items-center pointer bg-white rounded py-4 mb-4" data-toggle="modal" data-target="#${key}">
                    <div class="idol-card__box-photo text-center ml-3">
                        <img id="li-img" src="img/${val.avatar}" alt="idol photo" class="idol-card__photo rounded-circle">
                    </div>
                    <div class="idol-card__box-text text-center mr-4"> 
                        <p class="idol-card__name text-uppercase text-muted mb-0">${val.name}</p>
                    </div>
                </li>`

                var modalTemplate = 
                `<div class="modal fade" id="${key}" tabindex="-1" role="dialog" aria-labelledby="exampleModalLongTitle" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header d-flex justify-content-center p-2">
                                <h3 class="modal-title" id="exampleModalLongTitle">${val.name}</h3>
                            </div>
                        <div class="modal-body">
                            <img id="modal-img" style="height: 400px;" src="img/${val.avatar}" alt="idol photo" class="img-fluid d-block mx-auto mb-4">
                            <p class="border border-dark border-left-0 border-right-0 text-center h4 py-2 text-uppercase">info</p>
                                <table class="table" >
                                    <tr>
                                        <th class="border-0">Birthdate</th>
                                        <td id ="birthday" class="border-0">${val.year}</td>
                                    </tr>
                                    <tr>
                                        <th class="border-0">Birthplace</td>
                                        <td class="border-0">${val.home}</td>
                                    </tr>
                                    <tr>
                                        <th class="border-0">Height</td>
                                        <td class="border-0">${val.height} cm</td>
                                    </tr>
                                </table>
                            </div>    
                        </div>
                    </div>
                </div>`
                
                // Fill HTML content by calling jQuery.append() method
                $("#idol-list").append(listTemplate); // Fill the list
                $("body").append(modalTemplate); // Create modal box
                $("#loading").hide(); // Hide the loading gif
            })
        })
    });
});