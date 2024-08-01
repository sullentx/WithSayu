
export default class TableManager {
    constructor(containerId) {
      this.container = document.getElementById(containerId);
      this.tableId = 'myTable';
      this.dataTable = null;
    }
  
    createTable(data) {
      
      if (this.dataTable) {
        this.dataTable.destroy();
      }
  
      
      const table = document.createElement('table');
      table.id = this.tableId;
      table.className = 'display';
      const thead = document.createElement('thead');
      const tbody = document.createElement('tbody');
  
      
      const headerRow = document.createElement('tr');
      const indexHeader = document.createElement('th');
      const valueHeader = document.createElement('th');
      indexHeader.textContent = 'Índice';
      valueHeader.textContent = 'Elemento';
      headerRow.appendChild(indexHeader);
      headerRow.appendChild(valueHeader);
      thead.appendChild(headerRow);
  
      
      data.forEach((element, index) => {
        const row = document.createElement('tr');
        const indexCell = document.createElement('td');
        const valueCell = document.createElement('td');
        indexCell.textContent = index;
        valueCell.textContent = element;
        row.appendChild(indexCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
      });
  
      table.appendChild(thead);
      table.appendChild(tbody);
      this.container.innerHTML = '';
      this.container.appendChild(table);
  
     
      this.dataTable = $('#' + this.tableId).DataTable();
    }
  }
  