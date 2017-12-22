export default {
  key: 'status',
  name: 'Status de transação',
  items: [
    {
      label: 'Paga',
      value: 'payed',
    },
    {
      label: 'Recusada',
      value: 'refused',
    },
    {
      label: 'Estornada',
      value: 'reversed',
    },
    {
      label: 'Estorno pendente',
      value: 'pending_reversal',
    },
    {
      label: 'Aguardando pagamento',
      value: 'waiting_payment',
    },
    {
      label: 'Processando',
      value: 'processing',
    },
    {
      label: 'Chargeback',
      value: 'chargeback',
    },
    {
      label: 'Chargeback reapresentado',
      value: 'contested_chargeback',
    },
    {
      label: 'Boleto pago com valor inferior',
      value: 'boleto_less_value',
    },
    {
      label: 'Esperando registro',
      value: 'waiting_register',
    },
    {
      label: 'Boleto pago com valor superior',
      value: 'boleto_more_value',
    },
    {
      label: 'Autorizada',
      value: 'authorized',
    },
  ],
}
