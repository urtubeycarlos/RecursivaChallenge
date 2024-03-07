using Microsoft.AspNetCore.Http;
using RecursivaChallengeBackend.Extensions;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;

namespace RecursivaChallengeBackend.Handlers.CsvProcessing
{
    public class CsvSuperLigaProcessingRequestDTO
    {
        [Required(ErrorMessage = "File is required")]
        [FileType(".csv", ErrorMessage = "File must be .csv")]
        public IFormFile File { get; set; }

        public int Page { get; set; }
        public int PageSize { get; set; }

        public CsvSuperLigaProcessingRequestDTO()
        {            
            Page = 1;
            PageSize = int.MaxValue;
        }
    }
}
