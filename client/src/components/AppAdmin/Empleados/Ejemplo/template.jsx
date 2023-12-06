import { DataUtil } from '@syncfusion/ej2-data';
import { DropDownListComponent } from '@syncfusion/ej2-react-dropdowns';
import { NumericTextBoxComponent } from '@syncfusion/ej2-react-inputs';
import * as React from 'react';
import { data as orderData } from './datasourse';
import './template.css'

export class DialogFormTemplate extends React.Component {
    shipCountryDistinctData = DataUtil.distinct(orderData, 'ShipCountry', true);

    constructor(props) {
        super(props);
        this.state = Object.assign({}, props);
    }

    onChange(args) {
        this.setState({ [args.target.name]: args.target.value });
    }

    render() {
        this.onChange = this.onChange.bind(this);
        const data = this.state;
        return (<div className='main'>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <div className="e-float-input e-control-wrapper">
                        <input id="OrderID" name="ID Orden" type="text" className='inputDialog' disabled={!data.isAdd} value={data.OrderID} onChange={this.onChange}/>
                        <span className="e-float-line"/>
                        <label className="e-float-text e-label-top miLabel">Order ID</label>
                    </div>
                </div>
                <div className="form-group col-md-6">
                    <div className="e-float-input e-control-wrapper">
                        <input value={data.CustomerID} id="CustomerID" name="CustomerID"  className='inputDialog' type="text" onChange={this.onChange}/>
                        <span className="e-float-line"/>
                        <label className="e-float-text e-label-top miLabel">Customer Name</label>
                    </div>
                </div>
            </div>
            <div className="form-row">
                <div className="form-group col-md-6">
                    <NumericTextBoxComponent id="Freight" format='C2' value={data.Freight}  className='inputDialog' placeholder="Freight" floatLabelType='Always' />
                </div>
                <div className="form-group col-md-6">
                    <DropDownListComponent
                    id="ShipCountry"
                    value={data.ShipCountry}
                    dataSource={this.shipCountryDistinctData}
                    className='inputDialog'
                    fields={{ text: 'ShipCountry', value: 'ShipCountry' }}  
                    placeholder="Ship Country"
                    popupHeight='500px'
                    floatLabelType='Always'
                    />
                </div>
            </div>

            <div className="form-row">
                <div className="form-group col-md-12">
                    <div className="e-float-input e-control-wrapper">
                        <textarea id="ShipAddress" name="ShipAddress"  className='inputDialog' value={data.ShipAddress} onChange={this.onChange}/>
                        <span className="e-float-line"/>
                        <label className="e-float-text e-label-top miLabel">Ship Address</label>
                    </div>
                </div>
            </div>
        </div>);
    }
}