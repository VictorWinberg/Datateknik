import org.junit.*;
 
public class ABCTest {
    @BeforeClass
    public static void setUpClass() throws Exception {
        // Kod som exekveras innan första metoden     
    }
 
    @Before
    public void setUp() throws Exception {
        // Kod som exekveras innan varje test  
    }
 
    @Test
    public void testOneThing() {
        // Kod som testar en sak
    }
 
    @Test
    public void testAnotherThing() {
        // Kod som testar en annan sak
    }
 
    @Test
    public void testSomethingElse() {
        // Kod som testar någonting annat
    }
 
    @After
    public void tearDown() throws Exception {
        // Kod som exekveras efter varje test
    }
 
    @AfterClass
    public static void tearDownClass() throws Exception {
        // Kod som exekveras efter den sista metoden
    }
}