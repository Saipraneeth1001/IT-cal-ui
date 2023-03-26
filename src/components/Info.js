import { NewTaxRegime, OldTaxRegime } from '../data/TaxSlabData';
import { BasicTable } from '../styled-components/Table';


const Info = () => {
    return(
      <div>
        <BasicTable rows={OldTaxRegime} taxRegime="Income tax slab - Old Tax Regime"/>

        <BasicTable rows={NewTaxRegime} taxRegime="Income tax slab - New Tax Regime"/>
      </div>
      
    );
}

export default Info;