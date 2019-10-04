$(document).ready(function () {
    let lineCounter = 1
    let indentation = 0
    let cache = []
    let keywords = ['for', 'while', 'if', 'else', 'int', 'float', 'char']

    $('#lineCounter').append(lineCounter+'<br>')
    $('#codeEditor').on('keydown',function(e){
        if(e.key == 'Enter' || e.key == 'Tab' || e.key == ' '){
            let current = cache.join('')
            if(keywords.includes(current)){
                console.log(current)
            }
            cache = []
        }
        else{
            if(e.key == 'Backspace'){
                cache.pop()
            }
            else{
                cache.push(e.key)
            }
            console.log(cache)
        }
        if(e.key == 'Enter'){
            console.log("enter pressed")
            lineCounter++
            $('#lineCounter').append(lineCounter+'<br>')
            var start = this.selectionStart
            var end = this.selectionEnd
            $(this).val($(this).val().substring(0, start)+ '<br>'+ '&#09;'.repeat(indentation) + $(this).val().substring(end))
            this.selectionStart = start + indentation + 1
            this.selectionEnd = start + indentation + 1

        }
        if(e.key == 'Backspace'){
            setTimeout(function (){
                lineCounter = $('#codeEditor').val().split(/\r<br>|\r|<br>/).length
                let i = 1
                $('#lineCounter').html('')
                while(i<=lineCounter){
                    $('#lineCounter').append(i+'<br>')
                    i++
                }
            },5)
        }
        if(e.key == 'Tab') {
            e.preventDefault()
            console.log(this.getSeletion)
            var start = this.selectionStart
            var end = this.selectionEnd
            $(this).val($(this).val().substring(0, start)+ "&#09;" + $(this).val().substring(end))
            this.selectionStart = start + 1
            this.selectionEnd = start + 1
            indentation++
        }
        if(e.key == '('){
            e.preventDefault()
            var start = this.selectionStart
            var end = this.selectionEnd
            $(this).val($(this).val().substring(0, start)+ "()" + $(this).val().substring(end))
            this.selectionStart = start + 1
            this.selectionEnd = start + 1
        }
        if(e.key == '{'){
            e.preventDefault()
            var start = this.selectionStart
            var end = this.selectionEnd
            $(this).val($(this).val().substring(0, start)+ "{}" + $(this).val().substring(end))
            this.selectionStart = start + 1
            this.selectionEnd = start + 1
        }
        if(e.key == '['){
            e.preventDefault()
            var start = this.selectionStart
            var end = this.selectionEnd
            $(this).val($(this).val().substring(0, start)+ "[]" + $(this).val().substring(end))
            this.selectionStart = start + 1
            this.selectionEnd = start + 1
        }
     })
})