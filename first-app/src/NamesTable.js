function NamesTable(){
    const names = [{'fname':'Anders','lname':'Henriksen'},{'fname':'Britta','lname':'Albertsen'},{'fname':'Kalle','lname':'Fredborg'}]
  return(<table>
    <th>First Name</th>    
    <th>Last Name</th>
    {names.map(person=>
        <tr>
        <td>{person.fname}
        </td>
        <td>{person.lname}
        </td>
        </tr>
       )
      }
        
       </table>)
    
  }
  export default NamesTable;
 