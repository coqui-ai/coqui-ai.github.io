/**
 * Copyright Coqui GmbH
 *
 * Use of this source code is governed under the Apache License, Version 2.0
 * found at http://www.apache.org/licenses/LICENSE-2.0.
 */

import React from 'react';
import { useQuery, gql } from '@apollo/client';

const BILLING_INFO = gql`
  {
    billingInfo {
      plan {
        name
      }
      currentCostCents
      invoices {
        createdAt
        status
        amountDueCents
        amountPaidCents
        amountRemainingCents
        periodStart
        periodEnd
      }
    }
  }
`;

function asDollars(cents: number): string {
  return '$' + (cents / 100).toFixed(2);
}

const invoicesKeys = [
  'createdAt',
  'status',
  'amountDueCents',
  'amountPaidCents',
  'amountRemainingCents',
  'periodStart',
  'periodEnd'
];

export const Account: React.FC = () => {
  const { data, loading, error } = useQuery(BILLING_INFO);

  if (loading) return <div>Loading billing info...</div>;
  if (error)
    return (
      <div>
        <pre>{'' + error}</pre>
      </div>
    );

  const { billingInfo } = data;

  return (
    <div>
      Plan: {billingInfo.plan.name}
      <br />
      Current period owed: {asDollars(billingInfo.currentCostCents)} (this data might be slightly
      outdated)
      <br />
      Invoices:
      <table>
        <thead>
          <tr>
            {invoicesKeys.map(k => (
              <th key={k}>{k}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {billingInfo.invoices.map(i => (
            <tr key={i.since}>
              {invoicesKeys.map(k => (
                <td key={k}>{i[k]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
