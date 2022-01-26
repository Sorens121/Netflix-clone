import './widgetlg.css'
import React from 'react';

export default function WidgetLG() {
  const Button = ({type}) => {
    return (<button className={'widgetLgButton ' + type}>{type}</button>)
  }
  return (
      <div className="widgetlarge">
          <h3 className="widgetLgTitle">Latest Transactions</h3>
          <table className="widgetLgTable">
            <tr className="widgetLgTr">
              <th className="widgetLgTh">Customer</th>
              <th className="widgetLgTh">Date</th>
              <th className="widgetLgTh">Amount</th>
              <th className="widgetLgTh">Status</th>
            </tr>

            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Susan Carol</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$200.01</td>
              <td className="widgetLgStatus"><Button type="Approved"/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" className="widgetLgImg" />
                <span className="widgetLgName">John Wick</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$1200</td>
              <td className="widgetLgStatus"><Button type="Declined"/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Jane Doe</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$20.99</td>
              <td className="widgetLgStatus"><Button type="InProgress"/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Jane Doe</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$20.99</td>
              <td className="widgetLgStatus"><Button type="InProgress"/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Jane Doe</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$20.99</td>
              <td className="widgetLgStatus"><Button type="InProgress"/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Jane Doe</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$20.99</td>
              <td className="widgetLgStatus"><Button type="InProgress"/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Jane Doe</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$20.99</td>
              <td className="widgetLgStatus"><Button type="InProgress"/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Jane Doe</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$20.99</td>
              <td className="widgetLgStatus"><Button type="InProgress"/></td>
            </tr>
            <tr className="widgetLgTr">
              <td className="widgetLgUser">
                <img src="https://st2.depositphotos.com/1104517/11965/v/950/depositphotos_119659092-stock-illustration-male-avatar-profile-picture-vector.jpg" alt="" className="widgetLgImg" />
                <span className="widgetLgName">Jane Doe</span>
              </td>
              <td className="widgetLgDate">2 Jun 2021</td>
              <td className="widgetLgAmount">$20.99</td>
              <td className="widgetLgStatus"><Button type="InProgress"/></td>
            </tr>
          </table>
      </div>
  );
}
