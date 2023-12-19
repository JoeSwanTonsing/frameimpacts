$(document).ready(function () {
    $('body').on('keyup', '.azAZ', function () {
       if (this.value.match(/[^a-zA-Z]/)) {
            this.value = this.value.replace(/[^a-zA-Z]*$/, '');
        }
    });
    $('body').on('keyup', '.inumber', function () {
       if (this.value.match(/[^0-9]/)) {
            this.value = this.value.replace(/[^0-9]*$/, '');
        }
    });
    $('body').on('keyup', '.azAZSPC09', function () {
        if (this.value.match(/[^a-zA-Z0-9 \s]/)) {
            this.value = this.value.replace(/[^a-zA-Z0-9 \s]*$/, '');
        }
    });
    $('body').on('keyup', '.iemail', function () {
         if (this.value.match(/[^a-zA-Z0-9\-_@.]/)) {
            this.value = this.value.replace(/[^a-zA-Z\-_@.]*$/, '');
        }
    });
    $('body').on('keyup', '.inputnum', function () {
        if (this.value.match(/[^0-9]/)) {
            this.value = this.value.replace(/[^0-9]*$/, '');
        }
    });
    $('body').on('keyup', '.azAZSPC', function () {
        if (this.value.match(/[^a-zA-Z \s]/)) {
            this.value = this.value.replace(/[^a-zA-Z \s]*$/, '');
        }
    });
    $('body').on('focusout', '.mm010', function () {
        var mk = this.value;
        if (mk >= 1 && mk <= 10) {
            return true;
        } else {
            alert("Mark for both Statement of Purpose & Aptitude of Law should be between 1-10 only.");
            this.value = '';
            return false;
        }
    });
});