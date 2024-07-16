using Microsoft.AspNetCore.Mvc;
using TMM022_fmb.Models;
using TMM022_fmb.Services;

namespace TMM022_fmb.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PartMasterController : ControllerBase
    {
        private readonly PartMasterService _partMasterService;

        public PartMasterController(PartMasterService partMasterService)
        {
            _partMasterService = partMasterService;
        }

        [HttpPost("save")]
        public IActionResult SavePartInformation([FromBody] Part part)
        {
            bool isSaved = _partMasterService.SavePartInformation(part);
            if (isSaved)
            {
                return Ok("Part information saved successfully.");
            }
            else
            {
                return StatusCode(500, "Failed to save part information.");
            }
        }

        [HttpGet("exists")]
        public IActionResult CheckPartExists([FromQuery] string unitId, [FromQuery] string groupId, [FromQuery] string lineId, [FromQuery] string partNo)
        {
            bool exists = _partMasterService.CheckPartExists(unitId, groupId, lineId, partNo);
            return Ok(exists);
        }
    }
}