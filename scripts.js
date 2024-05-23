document.getElementById('filterInput').addEventListener('keyup', filterTable);

function filterTable() {
    const filterValue = document.getElementById('filterInput').value.toUpperCase();
    const table = document.getElementById('dataTable');
    const trs = table.getElementsByTagName('tr');
    
    for (let i = 1; i < trs.length; i++) {
        const tds = trs[i].getElementsByTagName('td');
        let showRow = false;
        
        for (let j = 0; j < tds.length; j++) {
            const button = tds[j].getElementsByTagName('button')[0];
            if (button.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
                showRow = true;
                break;
            }
        }
        
        trs[i].style.display = showRow ? '' : 'none';
    }
}

function sortTable(columnIndex) {
    const table = document.getElementById('dataTable');
    let switching = true;
    let shouldSwitch, i;
    let dir = 'asc';
    let switchCount = 0;
    
    while (switching) {
        switching = false;
        const rows = table.rows;
        
        for (i = 1; i < (rows.length - 1); i++) {
            shouldSwitch = false;
            const x = rows[i].getElementsByTagName('td')[columnIndex].getElementsByTagName('button')[0];
            const y = rows[i + 1].getElementsByTagName('td')[columnIndex].getElementsByTagName('button')[0];
            
            if (dir === 'asc') {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            } else if (dir === 'desc') {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    shouldSwitch = true;
                    break;
                }
            }
        }
        
        if (shouldSwitch) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
            switching = true;
            switchCount++;
        } else {
            if (switchCount === 0 && dir === 'asc') {
                dir = 'desc';
                switching = true;
            }
        }
    }
}
