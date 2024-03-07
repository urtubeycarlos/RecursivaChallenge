#pragma warning disable CS1998 // El método asincrónico carece de operadores "await" y se ejecutará de forma sincrónica

using RecursivaChallengeBackend.Models;
using RecursivaChallengeBackend.Services;

namespace RecursivaChallengeBackend.Handlers.CsvProcessing
{
    public class CsvSuperLigaProcessingHandler : IHandler<CsvSuperLigaProcessingRequestDTO, CsvSuperLigaProcessingResponseDTO>
    {
        private readonly CsvService _csvService;

        public CsvSuperLigaProcessingHandler(CsvService csvService)
        {
            _csvService = csvService;
        }


        public async Task<CsvSuperLigaProcessingResponseDTO> HandleAsync(CsvSuperLigaProcessingRequestDTO request)
        {
            List<RegistroCsvSuperLiga> registros = _csvService.TransformFromCSV<RegistroCsvSuperLiga>(request.File, request.Page, request.PageSize).ToList();
            registros.Sort();
            return new CsvSuperLigaProcessingResponseDTO(registros);
        }
    }
}

#pragma warning restore CS1998 // El método asincrónico carece de operadores "await" y se ejecutará de forma sincrónica