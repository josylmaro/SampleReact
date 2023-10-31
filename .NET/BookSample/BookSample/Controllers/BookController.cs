using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using static System.Reflection.Metadata.BlobBuilder;
using System.Reflection;
using System.Xml.Linq;
using BookSample.Models;

namespace BookSample.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class BookController : ControllerBase
    {
        private readonly ILogger<BookController> _logger;

        public BookController(ILogger<BookController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "GetBookReaders")]
        public IEnumerable<BookReader> Get()
        {
            return new List<BookReader>()
            {
                new BookReader()
                {
                    Name = "Charles",
                    Gender = "Male",
                    Age= 23,
                    Books = new List<Book>() {

                      new Book() { Name= "Hamlet", Type= "Hardcover" },
                      new Book { Name = "Wuthering Heights", Type = "Paperback" }
                    }
                },
                 new BookReader()
                {
                    Name = "Emily",
                    Gender = "Female",
                    Age= 18,
                    Books = new List<Book>() {

                      new Book() { Name= "Hamlet", Type= "Paperback" }
                    }
                },
                 new BookReader()
                {
                    Name = "Jonathan",
                    Gender = "Male",
                    Age= 45
                },
                 new BookReader()
                {
                    Name = "William",
                    Gender = "Male",
                    Age= 40,
                    Books = new List<Book>() {
                      new Book() { Name= "React: The Ultimate Guide", Type= "Hardcover" },
                      new Book() { Name= "Gulliver's Travels", Type= "Hardcover" },
                      new Book() { Name= "Jane Eyre", Type= "Paperback" },
                      new Book() { Name= "Great Expectations", Type= "Hardcover" }
                    }
                },
                 new BookReader()
                {
                    Name = "Charlotte",
                    Gender = "Female",
                    Age= 40,
                    Books = new List<Book>() {
                      new Book() { Name= "Great Expectations", Type= "Hardcover" }
                    }
                },
                 new BookReader()
                {
                    Name = "Jane",
                    Gender = "Female",
                    Age= 64,
                    Books = new List<Book>() {
                      new Book() { Name= "Little Red Riding Hood", Type= "Hardcover" },
                      new Book() { Name= "The Hobbit", Type= "Ebook" }
                    }
                }
            };
        }
    }
}
