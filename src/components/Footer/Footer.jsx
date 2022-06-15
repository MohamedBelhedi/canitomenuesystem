import React from 'react'

function Footer({DatenSchutz,Impressum,Kontakt}) {
  return (
    <div className="footer">
<a onClick={DatenSchutz}>Datenschutz</a>
<a onClick={Impressum} >Impressum</a>
<a onClick={Kontakt}>Kontakt</a>
<a ></a>




    </div>
  )
}

export default Footer