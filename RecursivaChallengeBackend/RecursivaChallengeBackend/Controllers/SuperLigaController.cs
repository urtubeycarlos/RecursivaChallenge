using Microsoft.AspNetCore.Mvc;
using RecursivaChallengeBackend.Handlers.CsvProcessing;

namespace RecursivaChallengeBackend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class SuperLigaController : ControllerBase
    {
        [HttpPost("ProcesarCSV")]
        public async Task<ActionResult<CsvSuperLigaProcessingResponseDTO>> ProcesarCSV([FromServices] CsvSuperLigaProcessingHandler handler, [FromForm] CsvSuperLigaProcessingRequestDTO request)
        {
            return await handler.HandleAsync(request);
        }
    }
}
