class Query {
  data: any[];
  constructor(data: any[]) {
    this.data = data;
  }

  // Products Filter
  filter_kyc_status(status: string[]) {
    if (status.length > 0) {
      this.data = this.data
        .slice()
        .filter((el) =>
          status.includes(el.is_id_verified ? 'Verfied' : 'Unverified')
        );
    }
    return this;
  }

  filter_client_type(client_types: string[]) {
    if (client_types.length > 0) {
      this.data = this.data
        .slice()
        .filter((el) => client_types.includes(el.client_type));
    }
    return this;
  }
}

export default Query;
