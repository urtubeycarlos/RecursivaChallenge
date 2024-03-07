using CsvHelper;
using CsvHelper.Configuration;
using Microsoft.AspNetCore.Http;
using System.Globalization;
using System.Text;

namespace RecursivaChallengeBackend.Services
{
    public class CsvService : IService
    {
        public IEnumerable<T> TransformFromCSV<T>(IFormFile csvFile, int page, int pageSize)
        {
            using (StreamReader reader = new StreamReader(csvFile.OpenReadStream(), Encoding.UTF8))
            using (CsvReader csv = new CsvReader(reader, new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                HasHeaderRecord = false,
                MissingFieldFound = null,
                Delimiter = ";"
            }))
            {
                return csv.GetRecords<T>().Skip((page - 1) * pageSize).Take(pageSize).ToList();
            }
        }

        public int CountRows(IFormFile csvFile)
        {
            using (StreamReader reader = new StreamReader(csvFile.OpenReadStream(), Encoding.UTF8))
            using (CsvReader csv = new CsvReader(reader, new CsvConfiguration(CultureInfo.InvariantCulture)
            {
                HasHeaderRecord = false,
                MissingFieldFound = null,
                Delimiter = ";"
            }))
            {
                return csv.GetRecords<object>().Count();
            }
        }
    }
}
