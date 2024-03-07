using RecursivaChallengeBackend.Models;

namespace RecursivaChallengeBackend.Handlers.CsvProcessing
{
    public class CsvSuperLigaProcessingResponseDTO
    {
        public IEnumerable<RegistroCsvSuperLiga> Registros { get; set; }

        public CsvSuperLigaProcessingResponseDTO(IEnumerable<RegistroCsvSuperLiga> registros)
        {
            Registros = registros;
        }
    }
}
