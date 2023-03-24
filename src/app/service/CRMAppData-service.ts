export default class CRMAppDataService {
  public getMeetingsTasks = async (): Promise<any> => {
    const response = await fetch('https://excel2json.io/api/share/2fd4ecd6-da6c-4e37-e666-08dab79fa5b4');
    if (!response.ok) {
      return Promise.resolve(null);
    }
    return response.json();
  }
}
