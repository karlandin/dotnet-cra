using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using JsonFlatFileDataStore;
using Microsoft.AspNetCore.Mvc;
using WebApiTemplate.Models;

namespace WebApiTemplate.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        private readonly IDataStore _dataStore;

        public ValuesController(IDataStore dataStore)
        {
            _dataStore = dataStore;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Value>> Get()
        {
            var collection = _dataStore.GetCollection<Value>();
            return collection.AsQueryable().ToList();
        }

        [HttpGet("{id}")]
        public ActionResult<Value> Get(int id)
        {
            var collection = _dataStore.GetCollection<Value>();
            return collection.Find(x => x.Id == id).SingleOrDefault();
        }

        [HttpPost]
        public async Task Post([FromBody] Value value)
        {
            var collection = _dataStore.GetCollection<Value>();
            await collection.InsertOneAsync(new Value { Data = value.Data });
        }

        [HttpPut("{id}")]
        public void Put(int id, [FromBody] Value value)
        {
            var collection = _dataStore.GetCollection<Value>();
            collection.UpdateOneAsync(id, value);

        }

        [HttpDelete("{id}")]
        public async Task Delete(int id)
        {
            var collection = _dataStore.GetCollection<Value>();
            await collection.DeleteOneAsync(id);
        }
    }
}