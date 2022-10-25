//Level 1
function alphabet_order(str) {
    return str.split('').sort().join('');
    }
document.writeln(alphabet_order("uncopyrightable")); 

//Level 2
function find_longest_word(str) {
    return str.split(' ').reduce((a, b) => (b.length > a.length) ? b : a);
}    
document.writeln(find_longest_word('Web Development In Telran'));